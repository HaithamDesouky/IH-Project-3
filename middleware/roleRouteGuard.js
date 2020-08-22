const roleRouteGuard = roles => {
  return (req, res, next) => {
    const admin = req.user.admin;
    if (admin) {
      next();
    } else {
      next(new Error('User is not authorized'));
    }
  };
};

module.exports = roleRouteGuard;
