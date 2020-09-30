<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text" />
    <xsl:strip-space elements="*"/>

    <xsl:variable name="delimiter" select="','" />

    <xsl:variable name="name" select="/DEBMAS_C4CEXT/IDOC/E1KNA1M/NAME1"/>

    <xsl:variable name="externalId" select="/DEBMAS_C4CEXT/IDOC/E1KNA1M/KUNNR"/>

    <xsl:variable name="status">Available</xsl:variable>

    <xsl:variable name='newline'><xsl:text>
</xsl:text></xsl:variable>

    <xsl:variable name="fieldArray">
        <field>CurrencyIsoCode</field>
        <field>Z_Payment_Terms__c</field>
        <field>Name</field>
        <field>Status</field>
        <field>External_ID__c</field>

    </xsl:variable>

    <xsl:template match="/">
        <xsl:value-of select="concat('CurrencyIsoCode,Z_Payment_Terms__c,Name,Status,External_ID__c',$newline)"/>

        <xsl:apply-templates select="/DEBMAS_C4CEXT/IDOC/E1KNA1M/E1KNVVM"/>
    </xsl:template>

    <xsl:template match="E1KNVVM">
        <xsl:value-of select="WAERS"/>
        <xsl:value-of select="$delimiter"/>
        <xsl:value-of select="ZTERM"/>
        <xsl:value-of select="$delimiter"/>
        <xsl:value-of select="$name"/>
        <xsl:value-of select="$delimiter"/>
        <xsl:value-of select="$status"/>
        <xsl:value-of select="$delimiter"/>
        <xsl:value-of select="concat($externalId,'-',VKORG,'-',VTWEG,'-',SPART)"/>
        <xsl:text>&#xa;</xsl:text>
    </xsl:template>
</xsl:stylesheet>
