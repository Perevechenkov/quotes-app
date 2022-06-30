import classes from './Layout.module.scss';

import MainNavigation from './MainNavigation';

export default function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}
