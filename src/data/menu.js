import { CgMenuBoxed } from 'react-icons/cg';
import { MdDone } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';
import { IoBookOutline } from 'react-icons/io5';

export const menuData = [
  {
    title: 'My Notes',
    url: '/notes',
    image: <CgMenuBoxed size="28px" />,
  },
  {
    title: 'To-do List',
    url: '/todos',
    image: <MdDone size="28px" />,
  },
  {
    title: 'Projects',
    url: '/projects',
    image: <CgMenuBoxed size="28px" />,
  },
  {
    title: 'Jornal',
    url: '/jornal',
    image: <GrEdit size="28px" />,
  },
  {
    title: 'Reading List',
    url: '/reading-list',
    image: <IoBookOutline size="28px" />,
  },
];
