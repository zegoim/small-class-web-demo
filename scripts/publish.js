const { execSync, spawnSync } = require('child_process')
const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')

function deployWeb(gitUrl, gitDir) {
  function deployToGit() {
    const projectDir = gitDir
    const publicOptions = { cwd: projectDir, stdio: 'inherit' }
  
    if (fs.existsSync(projectDir)) {
      updateFiles()
    } else {
      execSync(`git clone ${gitUrl} ${projectDir}`)
      updateFiles()
    }
  
    function updateFiles() {
      console.log('old build files is cleaned!\n')
      spawnSync('git', ['reset', '--hard'], publicOptions)
      spawnSync('git', ['pull'], publicOptions)
      console.log('publicReport is updated!\n')
    
      const outputPath = path.join(__dirname, '../build')
      const outputGitPath = path.join(outputPath, '.git')
      fse.copySync(`${projectDir}/.git`, outputGitPath, { overwrite: true })
      fse.emptyDirSync(projectDir)
      
      fse.copySync(outputPath, projectDir, { overwrite: true })
      fse.emptyDirSync(outputGitPath)
      
      spawnSync('git', ['add', '-A'], publicOptions)
      spawnSync(
        'git',
        ['commit', '-m', `Updated at ${(new Date()).toLocaleDateString()}`],
        publicOptions
      )
      spawnSync('git', ['push', '-u', 'origin', 'master'], publicOptions)
      
      console.log('project is updated!')
    }
  }
  deployToGit()
}

// deployWeb('git@gl.zego.im:playground/app-download-build.git', path.join(__dirname, '../../app-download-build'))

const publicDir = path.join(__dirname, "../../zego-official")
const publicOptions = { cwd: publicDir, stdio: 'inherit' }
spawnSync('git', ['clean', '-fd'], publicOptions)
spawnSync('git', ['reset', '--hard'], publicOptions)
spawnSync('git', ['pull'], publicOptions)

fse.copySync(path.join(__dirname, "../build"), publicDir);

spawnSync('git', ['add', '-A'], publicOptions)
spawnSync(
  'git',
  ['commit', '-m', `Updated at ${(new Date()).toLocaleDateString()}`],
  publicOptions
)
spawnSync('git', ['push', '-u', 'origin', 'master'], publicOptions)
