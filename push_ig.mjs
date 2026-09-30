/**
 * KisanSetu AI — GitHub Push via isomorphic-git (pure Node.js, no git CLI)
 * Run: node push_ig.mjs <YOUR_GITHUB_TOKEN>
 */
import { writeFileSync, readFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, relative } from 'path';
import { createRequire } from 'module';
import { execSync } from 'child_process';

const TOKEN = process.argv[2];
const REPO_URL = 'https://github.com/ASHWIN07026/kisansetu-ai.git';
const PROJECT_ROOT = 'd:\\TechLens';

if (!TOKEN) {
  console.log('\n❌ No token provided!');
  console.log('Usage: node push_ig.mjs ghp_YOUR_TOKEN\n');
  console.log('Get token: https://github.com/settings/tokens/new');
  console.log('Required scope: ✅ repo\n');
  process.exit(1);
}

console.log('\n📦 Installing isomorphic-git...');
execSync('npm install isomorphic-git @isomorphic-git/lightning-fs --save-dev', {
  cwd: PROJECT_ROOT,
  stdio: 'inherit'
});
console.log('✅ Installed!\n');

// Now dynamically import and use
const { default: git } = await import('isomorphic-git');
const { default: http } = await import('isomorphic-git/http/node/index.cjs');
const fs = await import('fs');

const SKIP = ['node_modules', '.git', 'dist', 'push_ig.mjs', 'push_to_github.mjs'];

function shouldSkip(p) {
  return p.split(/[\\/]/).some(part => SKIP.includes(part));
}

console.log('🔧 Initializing local git repo...');
await git.init({ fs, dir: PROJECT_ROOT });

console.log('📋 Staging all files...');
function getAllFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = relative(PROJECT_ROOT, full).replace(/\\/g, '/');
    if (shouldSkip(rel)) continue;
    if (statSync(full).isDirectory()) {
      results.push(...getAllFiles(full));
    } else {
      results.push(rel);
    }
  }
  return results;
}

const files = getAllFiles(PROJECT_ROOT);
console.log(`Found ${files.length} files\n`);

for (const f of files) {
  await git.add({ fs, dir: PROJECT_ROOT, filepath: f });
  process.stdout.write(`  ✅ Staged: ${f}\n`);
}

console.log('\n💾 Creating commit...');
await git.commit({
  fs,
  dir: PROJECT_ROOT,
  message: 'feat: KisanSetu AI - National Interoperable Agro-Intelligence Platform and Open DPG',
  author: { name: 'ASHWIN07026', email: 'ashwin@kisansetu.ai' },
});
console.log('✅ Committed!\n');

console.log('🚀 Pushing to GitHub...');
try {
  await git.push({
    fs,
    http,
    dir: PROJECT_ROOT,
    remote: 'origin',
    url: REPO_URL,
    ref: 'main',
    onAuth: () => ({ username: 'ASHWIN07026', password: TOKEN }),
    force: true,
  });
  console.log('\n🎉 SUCCESS! Pushed to GitHub!');
  console.log(`🔗 https://github.com/ASHWIN07026/kisansetu-ai\n`);
} catch (e) {
  console.error('\n❌ Push failed:', e.message);
  console.log('\nTry the manual method instead:');
  console.log('node push_to_github.mjs ' + TOKEN);
}
