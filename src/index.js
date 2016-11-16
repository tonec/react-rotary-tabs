import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tabs, Tab } from './components/'

class App extends Component {

  constructor (props) {
    super(props)

    this.tabs = [
      { title: 'Tab 1 title', content: 'Tab 1 content. Lorem ipsum dolor sit amet, equidem veritus laboramus ea est, elit quaestio et nec, eum in nobis omnes definitiones. Id vis mucius deleniti similique, vix minimum singulis et. Liber audire oporteat no per. Et assum assentior sit. Graece delectus dissentiet in sit, id sed atqui laoreet, pro vitae delicata ne. Suas disputationi vel no, aeque everti ex eum.' },
      { title: 'Tab 2 title', content: 'Tab 2 content. Lorem ipsum dolor sit amet, equidem veritus laboramus ea est, elit quaestio et nec, eum in nobis omnes definitiones. Id vis mucius deleniti similique, vix minimum singulis et. Liber audire oporteat no per. Et assum assentior sit. Graece delectus dissentiet in sit, id sed atqui laoreet, pro vitae delicata ne. Suas disputationi vel no, aeque everti ex eum.' },
      { title: 'Tab 3 title', content: 'Tab 3 content. Lorem ipsum dolor sit amet, equidem veritus laboramus ea est, elit quaestio et nec, eum in nobis omnes definitiones. Id vis mucius deleniti similique, vix minimum singulis et. Liber audire oporteat no per. Et assum assentior sit. Graece delectus dissentiet in sit, id sed atqui laoreet, pro vitae delicata ne. Suas disputationi vel no, aeque everti ex eum.' },
      { title: 'Tab 4 title', content: 'Tab 4 content. Lorem ipsum dolor sit amet, equidem veritus laboramus ea est, elit quaestio et nec, eum in nobis omnes definitiones. Id vis mucius deleniti similique, vix minimum singulis et. Liber audire oporteat no per. Et assum assentior sit. Graece delectus dissentiet in sit, id sed atqui laoreet, pro vitae delicata ne. Suas disputationi vel no, aeque everti ex eum.' },
    ]
  }

  render () {
    return (
      <div>
        <h1>Auto-rotatable tabs</h1>
        <Tabs>
          {this.tabs.map((tab) => {
            return (
              <Tab
                title={tab.title}
                content={tab.content}
              />
            )
          })}
        </Tabs>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))
