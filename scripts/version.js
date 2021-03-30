const semver = require('semver')
const fs = require('fs')
const path = require('path')
const VERSION_JSON = 'version.json'
const PROJECT_DIR = process.cwd()
const packageJson = require(path.join(PROJECT_DIR, 'package.json'))

const PACKAGE_JSON_VERSION_PARAM = packageJson.version

function increaseVersion(version) {
    if (!semver.valid(version)) throw new Error('Wrong Version, use semver valid version')
    fs.writeFileSync(path.join(PROJECT_DIR, VERSION_JSON), `{ "version": "${PACKAGE_JSON_VERSION_PARAM}" }`)
}

increaseVersion(PACKAGE_JSON_VERSION_PARAM)
