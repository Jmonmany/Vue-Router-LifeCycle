const isAuthenticatedGuard = (to, from, next) => {
  //   return new Promise(() => {
  const random = Math.random() * 100;
  if (random > 50) {
    console.log("authenticated: ", random);
    next();
  } else {
    console.log("not authenticated: ", random);
    next({ name: "pokemon-home" });
  }
  //   });
};
export default isAuthenticatedGuard;
