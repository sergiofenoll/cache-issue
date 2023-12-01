export default [
  {
    match: {},
    callback: {
      url: 'http://resource/.mu/detla', method: 'POST'
    },
    options: {
      resourceFormat: 'v0.0.1',
      gracePeriod: 250,
      ignoreFromSelf: true,
    }
  }
]
