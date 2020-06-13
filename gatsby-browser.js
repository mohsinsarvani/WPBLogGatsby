import './src/fonts/fonts.css'
import 'lazysizes'
require("prismjs/themes/prism-okaidia.css")

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
