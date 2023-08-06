import * as core from '@actions/core'
import {getPrNumber, addLabels, createClient} from './github'

async function run() {
  try {
    const token = core.getInput('repo-token', {required: true})
    const labelString = core.getInput('labels', {required: false})

    const prNumber = getPrNumber()
    if (!prNumber) {
      core.info('Could not get pull request number from context, exiting')
      return
    }

    const client = createClient(token)

    const affectedAppsArray = labelString
      .split(',')
      .map(label => label.trim())
      .filter(label => label.length > 0)

    const labels: string[] = [...affectedAppsArray]

    if (labels.length > 0) {
      await addLabels(client, prNumber, labels)
      core.setOutput('labels', JSON.stringify(labels))
    }
  } catch (error) {
    if (error instanceof Error) {
      core.error(error)
      core.setFailed(error.message)
    }
  }
}

run()
