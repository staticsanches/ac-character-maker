export const prettifyXml = (xml: string, attributesToRemove: string[] = []) => {
  const xmlDoc = new DOMParser().parseFromString(xml, 'application/xml')
  const xsltDoc = new DOMParser().parseFromString(
    [
      '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
      ...attributesToRemove.map((attr) => `  <xsl:template match="@${attr}" />`),
      '  <xsl:strip-space elements="*"/>',
      '  <xsl:template match="para[content-style][not(text())]">',
      '    <xsl:value-of select="normalize-space(.)"/>',
      '  </xsl:template>',
      '  <xsl:template match="node()|@*">',
      '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
      '  </xsl:template>',
      '  <xsl:output indent="yes"/>',
      '</xsl:stylesheet>',
    ].join('\n'),
    'application/xml'
  )

  const xsltProcessor = new XSLTProcessor()
  xsltProcessor.importStylesheet(xsltDoc)
  const resultDoc = xsltProcessor.transformToDocument(xmlDoc)
  return new XMLSerializer().serializeToString(resultDoc).replace(/\s*\/>/g, ' />')
}
