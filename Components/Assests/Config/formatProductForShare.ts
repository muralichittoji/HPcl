export const formatProductForShare = (product: any): string => {
  if (!product) return '';

  const title = product.title?.replace('\n', ' ') ?? '';
  const subTitle = product.subTitle ?? '';
  const description = product.description ?? '';

  const specs = product.specifications
    ?.map((spec: any) => `• ${spec.property}: ${spec.value}`)
    .join('\n');

  const packaging = product.packaging?.join(', ');

  return `
  ${title}
  ${subTitle}
  
  ${description}
  
  Specifications:
  ${specs}
  
  Packaging:
  ${packaging}
  `.trim();
};
