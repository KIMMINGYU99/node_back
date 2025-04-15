const productService = {
  getAll: () => prisma.products.findMany(),

  getById: (id) => prisma.products.findUnique({ where: { id: +id } }),

  create: (data) => prisma.products.create({ data }),

  update: (id, data) => prisma.products.update({ where: { id: +id }, data }),

  delete: (id) => prisma.products.delete({ where: { id: +id } }),
};

module.exports = { productService };
