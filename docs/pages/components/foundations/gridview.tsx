import React, { useState } from 'react'
import type { NextPage } from 'next'
import Container, {
  Column,
  ColumnAlign,
  Row,
  RowAlign,
  RowContent,
  RowDirection,
  RowGutter,
  RowJustify,
  RowWrap,
  ContainerSize,
} from '@pisagor/gridview'

import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>

const Typography: NextPage = () => {
  const [containerSize, setContainerSize] = useState<ContainerSize>('narrow')
  const [alignItems, setAlignItems] = useState<RowAlign>('start')
  const [direction, setDirection] = useState<RowDirection>('row')
  const [content, setContent] = useState<RowContent>('start')
  const [gutter, setGutter] = useState<RowGutter>('md')
  const [justify, setJustify] = useState<RowJustify>('start')
  const [wrap, setWrap] = useState<RowWrap>('wrap')
  const [alignSelf, setAlignSelf] = useState<ColumnAlign>('start')

  const handleContainerSizeChange = (event: SelectChangeEvent) => {
    setContainerSize(event.currentTarget.value as ContainerSize)
  }

  const handleAlignChange = (event: SelectChangeEvent) => {
    setAlignItems(event.currentTarget.value as RowAlign)
  }

  const handleContentChange = (event: SelectChangeEvent) => {
    setContent(event.currentTarget.value as RowContent)
  }

  const handleDirectionChange = (event: SelectChangeEvent) => {
    setDirection(event.currentTarget.value as RowDirection)
  }

  const handleGutterChange = (event: SelectChangeEvent) => {
    setGutter(event.currentTarget.value as RowGutter)
  }

  const handleJustifyChange = (event: SelectChangeEvent) => {
    setJustify(event.currentTarget.value as RowJustify)
  }

  const handleWrapChange = (event: SelectChangeEvent) => {
    setWrap(event.currentTarget.value as RowWrap)
  }

  const handleAlignSelfChange = (event: SelectChangeEvent) => {
    setAlignSelf(event.currentTarget.value as ColumnAlign)
  }

  return (
    <DocumentLayout
      title="Gridview"
      description="The grid is the foundation for positioning elements onscreen. Designing to the grid helps create seamless, easy to follow experiences."
      // include="import { Container, Row, Column } from '@/components/base/gridview';"
    >
      <h3>Container</h3>
      <h4>Size</h4>
      <Example>
        <select value={containerSize} onChange={handleContainerSizeChange}>
          <option value="fluid">fluid</option>
          <option value="extended">extended</option>
          <option value="wide">wide</option>
          <option value="medium">medium</option>
          <option value="narrow">narrow</option>
        </select>
        <Container size={containerSize}>
          <div className="placeholder">Content</div>
        </Container>
      </Example>
      <h2>Row</h2>
      <h4>Align items</h4>
      <p>
        This defines the default behavior for how flex items are laid out along
        the cross axis on the current line. Think of it as the justify-content
        version for the cross-axis (perpendicular to the main-axis).
      </p>
      <Example>
        <select value={alignItems} onChange={handleAlignChange}>
          <option value="start">start</option>
          <option value="center">center</option>
          <option value="end">end</option>
          <option value="baseline">baseline</option>
          <option value="stretch">stretch</option>
        </select>
        <Row align={alignItems}>
          <Column size={6}>
            <div className="placeholder" style={{ padding: '2rem 0' }}>
              1
            </div>
          </Column>
          <Column size={6}>
            <div className="placeholder">2</div>
          </Column>
        </Row>
      </Example>
      <h4>Align content</h4>
      <p>
        This aligns a flex container’s lines within when there is extra space in
        the cross-axis, similar to how justify-content aligns individual items
        within the main-axis.
      </p>
      <Example>
        <select value={content} onChange={handleContentChange}>
          <option value="start">start</option>
          <option value="center">center</option>
          <option value="end">end</option>
          <option value="around">around</option>
          <option value="between">between</option>
          <option value="evenly">evenly</option>
        </select>
        <Row content={content} style={{ height: 250 }}>
          <Column size={3}>
            <div className="placeholder">1</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">2</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">3</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">4</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">5</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">6</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">7</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">8</div>
          </Column>
        </Row>
      </Example>
      <h4>Direction</h4>
      <p>
        This establishes the main-axis, thus defining the direction flex items
        are placed in the flex container. Flexbox is (aside from optional
        wrapping) a single-direction layout concept. Think of flex items as
        primarily laying out either in horizontal rows or vertical columns.
      </p>
      <Example>
        <select value={direction} onChange={handleDirectionChange}>
          <option value="row">row</option>
          <option value="row-reverse">row reverse</option>
          <option value="column">column</option>
          <option value="column-reverse">column reverse</option>
        </select>
        <Row direction={direction}>
          <Column size={3}>
            <div className="placeholder">1</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">2</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">3</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">4</div>
          </Column>
        </Row>
      </Example>
      <h4>Gutter</h4>
      <Example>
        <select value={gutter} onChange={handleGutterChange}>
          <option value="xs">xs</option>
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
          <option value="xl">xl</option>
          <option value="none">none</option>
        </select>
        <Row gutter={gutter}>
          <Column size={3}>
            <div className="placeholder">1</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">2</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">3</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">4</div>
          </Column>
        </Row>
      </Example>
      <h4>Justify content</h4>
      <p>
        This defines the alignment along the main axis. It helps distribute
        extra free space leftover when either all the flex items on a line are
        inflexible, or are flexible but have reached their maximum size. It also
        exerts some control over the alignment of items when they overflow the
        line.
      </p>
      <Example>
        <select value={justify} onChange={handleJustifyChange}>
          <option value="start">start</option>
          <option value="center">center</option>
          <option value="end">end</option>
          <option value="around">around</option>
          <option value="between">between</option>
          <option value="evenly">evenly</option>
        </select>
        <Row justify={justify}>
          <Column size={3}>
            <div className="placeholder">1</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">2</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">3</div>
          </Column>
        </Row>
      </Example>
      <h4>Wrap</h4>
      <p>
        By default, flex items will all try to fit onto one line. You can change
        that and allow the items to wrap as needed with this property.
      </p>
      <Example>
        <select value={wrap} onChange={handleWrapChange}>
          <option value="nowrap">nowrap</option>
          <option value="wrap">wrap</option>
          <option value="wrap-reverse">wrap-reverse</option>
        </select>
        <Row wrap={wrap}>
          <Column size={3}>
            <div className="placeholder">1</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">2</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">3</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">4</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">5</div>
          </Column>
        </Row>
      </Example>
      <h2>Column</h2>
      <h4>Align</h4>
      <p>
        This allows the default alignment (or the one specified by align-items)
        to be overridden for individual flex items.
      </p>
      <p>
        Please see the align-items explanation to understand the available
        values.
      </p>
      <Example>
        <select value={alignSelf} onChange={handleAlignSelfChange}>
          <option value="start">start</option>
          <option value="center">center</option>
          <option value="end">end</option>
        </select>
        <Row>
          <Column size={3}>
            <div className="placeholder" style={{ padding: '2rem 0' }}>
              1
            </div>
          </Column>
          <Column size={3}>
            <div className="placeholder" style={{ padding: '2rem 0' }}>
              2
            </div>
          </Column>
          <Column size={3}>
            <div className="placeholder" style={{ padding: '2rem 0' }}>
              3
            </div>
          </Column>
          <Column size={3} align={alignSelf}>
            <div className="placeholder">4</div>
          </Column>
        </Row>
      </Example>
      <h4>Size</h4>
      <Example>
        <Row gutter="xs">
          <Column size={12}>
            <div className="placeholder">12</div>
          </Column>
          <Column size={1}>
            <div className="placeholder">1</div>
          </Column>
          <Column size={11}>
            <div className="placeholder">11</div>
          </Column>
          <Column size={2}>
            <div className="placeholder">2</div>
          </Column>
          <Column size={10}>
            <div className="placeholder">10</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">3</div>
          </Column>
          <Column size={9}>
            <div className="placeholder">9</div>
          </Column>
          <Column size={4}>
            <div className="placeholder">4</div>
          </Column>
          <Column size={8}>
            <div className="placeholder">8</div>
          </Column>
          <Column size={5}>
            <div className="placeholder">5</div>
          </Column>
          <Column size={7}>
            <div className="placeholder">7</div>
          </Column>
          <Column size={6}>
            <div className="placeholder">6</div>
          </Column>
          <Column size={6}>
            <div className="placeholder">6</div>
          </Column>
        </Row>
      </Example>
      <h4>Offset</h4>
      <Example>
        <Row gutter="xs">
          <Column size={12}>
            <div className="placeholder">0</div>
          </Column>
          <Column size={11} offset={1}>
            <div className="placeholder">1</div>
          </Column>
          <Column size={10} offset={2}>
            <div className="placeholder">2</div>
          </Column>
          <Column size={9} offset={3}>
            <div className="placeholder">3</div>
          </Column>
          <Column size={8} offset={4}>
            <div className="placeholder">4</div>
          </Column>
          <Column size={7} offset={5}>
            <div className="placeholder">5</div>
          </Column>
          <Column size={6} offset={6}>
            <div className="placeholder">6</div>
          </Column>
          <Column size={5} offset={7}>
            <div className="placeholder">7</div>
          </Column>
          <Column size={4} offset={8}>
            <div className="placeholder">8</div>
          </Column>
          <Column size={3} offset={9}>
            <div className="placeholder">9</div>
          </Column>
          <Column size={2} offset={10}>
            <div className="placeholder">10</div>
          </Column>
          <Column size={1} offset={11}>
            <div className="placeholder">11</div>
          </Column>
        </Row>
      </Example>
      <h4>Order</h4>
      <p>
        By default, flex items are laid out in the source order. However, the
        order property controls the order in which they appear in the flex
        container.
      </p>
      <Example>
        <h6>First</h6>
        <Row>
          <Column size={3}>
            <div className="placeholder">1</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">2</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">3</div>
          </Column>
          <Column size={3} order="first">
            <div className="placeholder">4</div>
          </Column>
        </Row>
        <h6>Last</h6>
        <Row>
          <Column size={3} order="last">
            <div className="placeholder">4</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">3</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">2</div>
          </Column>
          <Column size={3}>
            <div className="placeholder">1</div>
          </Column>
        </Row>
      </Example>
    </DocumentLayout>
  )
}

export default Typography
