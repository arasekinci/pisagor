import type { NextPage } from 'next'

import DocumentLayout from '@/layouts/document'

const Typography: NextPage = () => {
  return (
    <DocumentLayout
      title="Typography"
      description="Typography is our system of fonts. Each font conveys the appropriate sentiment to assist our users through each stage of their journey."
    >
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>This is a lead paragraph. It stands out from regular paragraphs.</p>
      <p>
        You can use the mark tag to <mark>highlight</mark> text.
      </p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p>
        <ins>
          This line of text is meant to be treated as an addition to the
          document.
        </ins>
      </p>
      <p>
        These elements
        <sup>1</sup> should still<sub>2</sub> have default styling
        <sup>3</sup> as well<sub>4</sub>
      </p>
      <p>
        <strong>This line rendered as bold text.</strong>
      </p>
      <p>
        <em>This line rendered as bold text.</em>
      </p>
      <p>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          Standard link
        </a>
      </p>
      <p>
        Link with descenders:&nbsp;
        <a href="https://google.com" target="_blank" rel="noreferrer">
          jump quickly!
        </a>
      </p>
      <blockquote>
        <p>
          All that is gold does not glitter, not all those who wander are lost;
          The old that is strong does not wither, deep roots are not reached by
          the frost.
        </p>
        <p>
          From the ashes a fire shall be woken, a light from the shadows shall
          spring; Renewed shall be blade that was broken, the crown-less again
          shall be king.
        </p>
        <p>
          <cite>J.R.R. Tolkien, The Fellowship of the Ring.</cite>
        </p>
      </blockquote>
      <p>
        Simply paste body <code>{'{ font-weight: bold; }'}</code> into your
        file.
      </p>
      <p>
        <small>Only use this size text if there is a good rationale.</small>
      </p>
    </DocumentLayout>
  )
}

export default Typography
