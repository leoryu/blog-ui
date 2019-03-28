import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import BlogBar from '../src/compoments/BlogBar';
import BlogDrawer from '../src/compoments/BlogDrawer'
// import Button from '@material-ui/core/Button'

storiesOf('BlogBar', module).add('with title', () => <BlogBar title='myTitle' />);
storiesOf('BlogDrawer', module).add("open", () => <BlogDrawer open='true' />)
// storiesOf('Button', module).add('with text', () => <Button variant='outlined'> Hello </Button>);

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

