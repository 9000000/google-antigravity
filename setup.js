const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const GLOBAL_DIR = path.join(os.homedir(), '.antigravity');
const SOURCE_DIR = path.join(__dirname, '.agent');

const syncFolders = ['rules', 'workflows', 'agents', 'skills', '.shared'];

async function setup() {
    console.log('🚀 Antigravity Global Setup Starting...');

    // 0. Check for Python (Required for Advanced Skills)
    let hasPython = false;
    try {
        execSync('python --version', { stdio: 'ignore' });
        hasPython = true;
    } catch (e) {
        try {
            execSync('python3 --version', { stdio: 'ignore' });
            hasPython = true;
        } catch (e2) {}
    }

    if (!hasPython) {
        console.log('⚠️ Warning: Python was not detected on your system.');
        console.log('   Some "Pro" features (automated scans, evaluators) require Python.');
        console.log('   You can still use the core IDE, but it is recommended to install Python later.');
    }

    // 1. Ask for Language
    const lang = await new Promise(resolve => {
        rl.question('🌐 Select Language / Chọn Ngôn ngữ (en/vi) [vi]: ', (answer) => {
            resolve(answer.toLowerCase() === 'en' ? 'en' : 'vi');
        });
    });

    // 2. Ask for Engine Mode
    console.log('\n🛠️ Select Engine Mode / Chọn Chế độ Động cơ:');
    console.log('   1. Standard (Node.js) - Gọn nhẹ, Không cần cấu hình [Mặc định]');
    console.log('   2. Advanced (Python) - Chuyên nghiệp, Yêu cầu đã cài đặt Python');
    const engineMode = await new Promise(resolve => {
        rl.question('👉 Choice / Lựa chọn của sếp (1/2) [1]: ', (answer) => {
            resolve(answer === '2' ? 'advanced' : 'standard');
        });
    });

    // 3. Ask for Project Scale
    console.log('\n⚖️  Select Project Scale / Chọn Quy mô Dự án:');
    console.log('   1. Personal (Cá nhân) - Tinh gọn, chỉ gồm Core + Debug');
    console.log('   2. SME / Start-Up (Tiêu chuẩn) - Đầy đủ bộ Big 5 + Business [Mặc định]');
    console.log('   3. Enterprise (Tập đoàn) - Full option + Compliance Rules');
    
    const projectScale = await new Promise(resolve => {
        rl.question('👉 Choice / Lựa chọn của sếp (1/2/3) [2]: ', (answer) => {
            if (answer === '1') resolve('personal');
            else if (answer === '3') resolve('enterprise');
            else resolve('sme');
        });
    });

    console.log(`📍 Selected Language: ${lang.toUpperCase()}`);
    console.log(`📍 Selected Engine: ${engineMode.toUpperCase()}`);
    console.log(`📍 Selected Scale: ${projectScale.toUpperCase()}`);

    // Save config
    if (!fs.existsSync(GLOBAL_DIR)) {
        fs.mkdirSync(GLOBAL_DIR, { recursive: true });
    }
    fs.writeFileSync(path.join(GLOBAL_DIR, '.config.json'), JSON.stringify({ lang, engineMode, projectScale }, null, 2));

    // 4. Config Rules based on Scale
    const rulesToSync = {
        'personal': ['GEMINI.md', 'security.md', 'debug.md'],
        'sme': ['GEMINI.md', 'security.md', 'frontend.md', 'backend.md', 'debug.md', 'business.md'],
        'enterprise': null // null means ALL files
    };

    // 5. Sync Files
    syncFolders.forEach(folder => {
        const src = path.join(SOURCE_DIR, folder);
        const dest = path.join(GLOBAL_DIR, folder);

        if (fs.existsSync(src)) {
            // Special handling for 'rules' folder based on scale
            if (folder === 'rules' && projectScale !== 'enterprise') {
                 if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
                 const allowedRules = rulesToSync[projectScale] || [];
                 
                 // Copy only allowed files
                 allowedRules.forEach(ruleFile => {
                     const srcRule = path.join(src, ruleFile);
                     const destRule = path.join(dest, ruleFile);
                     if (fs.existsSync(srcRule)) {
                         fs.copyFileSync(srcRule, destRule);
                     }
                 });
                 console.log(`✅ Đã đồng bộ ${folder} (Chế độ: ${projectScale}) vào hệ thống toàn cục.`);
            } else {
                // Default full sync for other folders or Enterprise mode
                if (os.platform() === 'win32') {
                    try {
                        execSync(`robocopy "${src}" "${dest}" /E /NFL /NDL /NJH /NJS /nc /ns /np`, { stdio: 'inherit' });
                    } catch (e) {
                        // Robocopy returns exit codes > 0 on success (1-7), catch block is expected
                    }
                } else {
                    execSync(`mkdir -p "${dest}" && cp -R "${src}/"* "${dest}/"`, { stdio: 'inherit' });
                }
                console.log(`✅ Đã đồng bộ ${folder} ${projectScale === 'enterprise' && folder === 'rules' ? '(Full Enterprise)' : ''} vào hệ thống toàn cục.`);
            }
        }
    });

    // 3. Localize Workflows
    localizeWorkflows(lang);

    console.log('\n✨ Thiết lập Hoàn tất! IDE của sếp hiện đã được Toàn cầu hóa.');
    console.log(`Thư mục lưu trữ toàn cục: ${GLOBAL_DIR}`);
    
    rl.close();
}

function localizeWorkflows(lang) {
    console.log('\n🌍 Localizing Workflows...');
    try {
        const workflowsJSON = JSON.parse(fs.readFileSync(path.join(SOURCE_DIR, '.shared', 'i18n-master', 'workflows.json'), 'utf-8'));
        const workflowDir = path.join(GLOBAL_DIR, 'workflows');

        Object.keys(workflowsJSON).forEach(filename => {
            const filePath = path.join(workflowDir, filename);
            if (fs.existsSync(filePath)) {
                let content = fs.readFileSync(filePath, 'utf-8');
                const desc = workflowsJSON[filename][lang];
                
                const newContent = content.replace(/^description:.*$/m, `description: ${desc}`);
                
                if (newContent !== content) {
                    fs.writeFileSync(filePath, newContent);
                    console.log(`   - Translated ${filename}`);
                }
            }
        });
        console.log('✅ Localization Complete.');
    } catch (err) {
        console.error('❌ Localization failed:', err.message);
    }
}

setup();
