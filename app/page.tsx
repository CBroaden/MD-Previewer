'use client'

import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

const SampleMarkdown: string = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == x && lastLine == y) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`


export default class App extends React.Component<{}, {markdown: string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      markdown: SampleMarkdown
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: any) {
    this.setState({
      markdown: event.target.value
    });
  }
  render() {
    return (
      <>
        <title>HTML Markdown Previewer</title>
        <link rel="icon" type="image/svg+xml" href="md-logo.svg"/>

        <div className="mx-auto w-[75%] [&>*]:mx-auto">
          <h1 className="title">Editor</h1>
          <textarea
            className="editor block my-5 w-[75%] h-64 p-4 rounded-xl"
            id="editor"
            rows={10}
            cols={30}
            value={this.state.markdown}
            onChange={this.handleChange}
          ></textarea>
          <h1 className="title">Preview</h1>
          <div id="preview">
            <ReactMarkdown
              className="preview"
              children={this.state.markdown}
              remarkPlugins={[remarkGfm]}
              components={{
                // Rewrite img to fit
                img: ({ ...props }) => (
                  <img style={{ height: 25 }} {...props} />
                ),
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

