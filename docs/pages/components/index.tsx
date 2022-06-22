import type { NextPage } from 'next'
import Page, { PageHeader } from '@pisagor/page'
import { Row, Column } from '@pisagor/gridview'

import Card from '@/components/card'
import Layout from '@/layouts/main'

const components = [
  // [
  //   'alert',
  //   'Alert',
  //   'A section message is used to alert users to a particular section of the screen.',
  // ],
  // [
  //   'accordion',
  //   'Accordion',
  //   'Tabs are used to organize content by grouping similar information on the same page.',
  // ],
  [
    'sidebar',
    'Sidebar',
    'A highly composable side navigation component that supports nested views.',
  ],
  [
    'breadcrumbs',
    'Breadcrumbs',
    "Breadcrumbs are a navigation system used to show a user's location in a site or app.",
  ],
  // [
  //   'button',
  //   'Button',
  //   'A button triggers an event or action. They let users know what will happen next.',
  // ],
  // [
  //   'cards',
  //   'Cards',
  //   'A cards contain content and actions about a single subject.',
  // ],
  // [
  //   'checkbox',
  //   'Checkbox',
  //   'A checkbox is an input control that allows a user to select one or more options from a number of choices.',
  // ],
  // [
  //   'divider',
  //   'Divider',
  //   'A divider is a thin line that groups content in lists and layouts.',
  // ],
  // [
  //   'icon',
  //   'Icon',
  //   'An icon is used as a visual representation of common actions and commands to provide context.',
  // ],
  // [
  //   'image',
  //   'Image',
  //   'A Image combined with the skeleton, you can add dynamic progressive images to provide a better user experience.',
  // ],
  // [
  //   'lozenge',
  //   'Lozenge',
  //   "A lozenge is a visual indicator used to highlight an item's status for quick recognition.",
  // ],
  // ['masonry', 'Masonry', 'Description will be added.'],
  // [
  //   'modal',
  //   'Modal',
  //   'A modal dialog displays content that requires user interaction, in a layer above the page.',
  // ],
  // [
  //   'pagination',
  //   'Pagination',
  //   'A pagination allows you to divide large amounts of content into smaller chunks across multiple pages.',
  // ],
  // ['photo-gallery', 'Photo gallery', 'Description will be added.'],
  // [
  //   'scroll',
  //   'Scroll',
  //   'Content box with scroll bar used to partially serve content in the application.',
  // ],
  // [
  //   'sliders',
  //   'Sliders',
  //   'Carousel component built with React. It is a react port of slick carousel.',
  // ],
  // [
  //   'spinner',
  //   'Spinner',
  //   'A spinner is an animated spinning icon that lets users know content is being loaded.',
  // ],
  // [
  //   'tabs',
  //   'Tabs',
  //   'Tabs are used to organize content by grouping similar information on the same page.',
  // ],
  // [
  //   'textfield',
  //   'Textfield',
  //   'A text field is an input that allows a user to write or edit text.',
  // ],
  // ['video', 'Video', 'Description will be added.'],
]

const Components: NextPage = () => {
  return (
    <Layout title="Design, develop, deliver">
      <Page>
        <PageHeader title="Components">
          <p>
            Components are the reusable building blocks of our design system.
            Each component meets a specific interaction or UI need, and has been
            specifically created to work together to create patterns and
            intuitive user experiences.
          </p>
        </PageHeader>
        <Row>
          {components.map(([name, title, description]) => (
            <Column key={name} size={4}>
              <Card
                type="components"
                href={`/components/${name}`}
                title={title}
                image={{
                  src: `/images/components/${name}.svg`,
                  alt: title,
                  width: 270,
                  height: 194,
                }}
              >
                <p>{description}</p>
              </Card>
            </Column>
          ))}
        </Row>
      </Page>
    </Layout>
  )
}

export default Components
