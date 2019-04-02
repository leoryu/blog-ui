import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Blog from '../src/Blog';
import BlogBar from '../src/compoments/BlogBar';
import BlogDrawer from '../src/compoments/BlogDrawer'
import BlogList from '../src/compoments/BlogList'
import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Blog', module).add('all', () => <Blog />);
storiesOf('BlogBar', module).add('with title', () => <BlogBar where='Where You Are' />);
storiesOf('BlogDrawer', module).add("open", () => <BlogDrawer drawerIsOpen='true' />)
storiesOf('BlogList', module).add('open', () => <BlogList drawerIsOpen={true} />)
    .add('close', () => <BlogList drawerIsOpen={false} />);


// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//     .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//     .add('with some emoji', () => (
//         <Button onClick={action('clicked')}>
//             <span role="img" aria-label="so cool">
//                 😀 😎 👍 💯
//       </span>
//         </Button>
//     ));

