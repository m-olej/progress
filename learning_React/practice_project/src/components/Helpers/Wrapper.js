// this can be replaced by <> </> surrounding tags !!!
// those tags need specific dependencies in a react setup though
// the most overall and best practise is to use
// <React.Fragment> </React.Fragment> which is the same thing, but not in a shorthand form
// can also be <Fragment> </Fragment> if Fragment is imported beforehand.

const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
