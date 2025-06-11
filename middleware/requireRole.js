module.exports = function requireRole(role) {
  return (req, res, next) => {
    const user = req.user;
    if (!user || user.role !== role) {
      return res.status(403).json({ error: 'Acesso restrito ao ' + role });
    }
    next();
  };
};