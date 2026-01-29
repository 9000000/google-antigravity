/**
 * Interactive prompts for project configuration
 */

const prompts = require('prompts');
const chalk = require('chalk');
const gradient = require('gradient-string');

// Display concise banner with gradient
function displayBanner() {
  console.clear();
  console.log('');
  console.log(gradient.rainbow('━'.repeat(60)));
  console.log(gradient.pastel.multiline('    ___          __  _ ______                 _ __       '));
  console.log(gradient.pastel.multiline('   /   |  ____  / /_(_) ____/________ __   __(_) /___  __'));
  console.log(gradient.pastel.multiline('  / /| | / __ \\/ __/ / / __/ ___/ __ `/ | / / / __/ / / /'));
  console.log(gradient.pastel.multiline(' / ___ |/ / / / /_/ / /_/ / /  / /_/ /| |/ / / /_/ /_/ / '));
  console.log(gradient.pastel.multiline('/_/  |_/_/ /_/\\__/_/\\____/_/   \\__,_/ |___/_/\\__/\\__, /  '));
  console.log(gradient.pastel.multiline('                                                 /____/   '));
  console.log(chalk.gray('  Google Antigravity • v1.0.0'));
  console.log(chalk.gray('  Developed with 💡 by Dokhacgiakhoa'));
  console.log(gradient.rainbow('━'.repeat(60)));
  console.log('');
}

const skillCategories = {
  webdev: {
    name: 'Web Development',
    skills: [
      'nextjs-react-expert',
      'typescript-expert',
      'tailwind-design-system',
      'api-design-principles',
      'frontend-design',
      'backend-patterns'
    ]
  },
  mobile: {
    name: 'Mobile Development',
    skills: [
      'react-native-architecture',
      'flutter-expert',
      'mobile-design',
      'ios-developer',
      'mobile-security-coder'
    ]
  },
  devops: {
    name: 'DevOps & Cloud',
    skills: [
      'kubernetes-architect',
      'terraform-specialist',
      'docker-expert',
      'cicd-automation-workflow-automate',
      'deployment-engineer'
    ]
  },
  security: {
    name: 'Security & Testing',
    skills: [
      'security-auditor',
      'tdd-orchestrator',
      'test-automator',
      'vulnerability-scanner',
      'penetration-testing'
    ]
  },
  ai: {
    name: 'AI & ML',
    skills: [
      'ai-engineer',
      'ml-engineer',
      'prompt-engineer',
      'rag-engineer',
      'llm-app-patterns'
    ]
  },
  data: {
    name: 'Data Engineering',
    skills: [
      'data-engineer',
      'sql-pro',
      'database-architect',
      'data-quality-frameworks',
      'spark-optimization'
    ]
  }
};

async function getProjectConfig(skipPrompts = false) {
  if (skipPrompts) {
    return {
      projectName: 'my-agent-project',
      template: 'standard',
      rules: 'balanced',
      skillCategories: ['webdev'],
      workflows: ['git', 'testing'],
      includeDashboard: false,
      language: 'en',
      packageManager: 'npm'
    };
  }

  // Display beautiful banner
  displayBanner();

  console.log(chalk.bold.cyan('🚀 Project Setup Wizard\n'));
  console.log(chalk.gray('Answer a few questions to configure your AI Agent project...\n'));

  const response = await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: 'Project name:',
      initial: 'my-agent-project',
      validate: (value) => {
        if (!/^[a-z0-9-_]+$/.test(value)) {
          return 'Project name can only contain lowercase letters, numbers, hyphens, and underscores';
        }
        return true;
      }
    },
    {
      type: 'select',
      name: 'language',
      message: 'Select Language (en/vi):',
      choices: [
        { title: '1. en', value: 'en' },
        { title: '2. vi', value: 'vi' }
      ],
      initial: 0
    },
    {
      type: 'select',
      name: 'template',
      message: (prev, values) => values.language === 'vi' ? 'Chọn mẫu dự án:' : 'Choose project template:',
      choices: (prev, values) => values.language === 'vi' ? [
        { title: '1. Tối giản - Chỉ cấu trúc .agent cơ bản', value: 'minimal' },
        { title: '2. Tiêu chuẩn - .agent + các skill được chọn (Khuyên dùng)', value: 'standard' },
        { title: '3. Đầy đủ - Tất cả mọi thứ (full skills, lab, test suite)', value: 'full' }
      ] : [
        { title: '1. Minimal - Basic .agent structure only', value: 'minimal' },
        { title: '2. Standard - .agent + selected skills (Recommended)', value: 'standard' },
        { title: '3. Full - Everything (all skills, lab, test suite)', value: 'full' }
      ],
      initial: 1
    },
    {
      type: 'select',
      name: 'rules',
      message: (prev, values) => values.language === 'vi' ? 'Quy tắc hành vi Agent:' : 'Agent behavior rules:',
      choices: (prev, values) => values.language === 'vi' ? [
        { title: '1. Nghiêm ngặt - An toàn tối đa, luôn hỏi trước khi làm', value: 'strict' },
        { title: '2. Cân bằng - Tự chủ vừa phải, an toàn (Khuyên dùng)', value: 'balanced' },
        { title: '3. Linh hoạt - Tự chủ cao, ít hạn chế', value: 'flexible' }
      ] : [
        { title: '1. Strict - Maximum safety, requires approval for most actions', value: 'strict' },
        { title: '2. Balanced - Good mix of autonomy and safety (Recommended)', value: 'balanced' },
        { title: '3. Flexible - High autonomy, minimal restrictions', value: 'flexible' }
      ],
      initial: 1
    },
    {
      type: (prev, values) => values.template !== 'minimal' ? 'multiselect' : null,
      name: 'skillCategories',
      message: (prev, values) => values.language === 'vi' ? 'Chọn nhóm kỹ năng:' : 'Select skill categories to include:',
      choices: Object.entries(skillCategories).map(([key, { name }]) => ({
        title: name,
        value: key,
        selected: key === 'webdev'
      })),
      hint: 'Space to select, Enter to confirm'
    },
    {
      type: 'multiselect',
      name: 'workflows',
      message: (prev, values) => values.language === 'vi' ? 'Chọn quy trình làm việc (Workflows):' : 'Select workflows to include:',
      choices: (prev, values) => values.language === 'vi' ? [
        { title: 'Git Workflows - Quản lý nhánh, commit, PR', value: 'git', selected: true },
        { title: 'Testing - TDD, unit tests, E2E tests', value: 'testing', selected: true },
        { title: 'Deployment - CI/CD, quy trình production', value: 'deployment', selected: false },
        { title: 'Code Review - Review code tự động', value: 'review', selected: false }
      ] : [
        { title: 'Git Workflows - Branch management, commits, PRs', value: 'git', selected: true },
        { title: 'Testing - TDD, unit tests, E2E tests', value: 'testing', selected: true },
        { title: 'Deployment - CI/CD, production workflows', value: 'deployment', selected: false },
        { title: 'Code Review - Automated review workflows', value: 'review', selected: false }
      ],
      hint: 'Space to select, Enter to confirm'
    },

    {
      type: 'select',
      name: 'packageManager',
      message: (prev, values) => values.language === 'vi' ? 'Trình quản lý gói (Package Manager):' : 'Package manager:',
      choices: [
        { title: '1. npm', value: 'npm' },
        { title: '2. pnpm', value: 'pnpm' },
        { title: '3. yarn', value: 'yarn' }
      ],
      initial: 0
    }
  ], {
    onCancel: () => {
      console.log(chalk.red('\n✖ Operation cancelled'));
      process.exit(0);
    }
  });

  return response;
}

function getSkillsForCategories(categories) {
  const skills = [];
  categories.forEach(category => {
    if (skillCategories[category]) {
      skills.push(...skillCategories[category].skills);
    }
  });
  return skills;
}

module.exports = {
  getProjectConfig,
  getSkillsForCategories,
  skillCategories
};
