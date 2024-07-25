const ListRecords = 
`<OAI-PMH xmlns="http://www.openarchives.org/OAI/2.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/  http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd"><request verb="ListRecords" metadataPrefix="oai_dc">http://localhost/openaire/oai</request><ListRecords><record><header><identifier identifierType="doi">ID</identifier><setSpec>openaire_data</setSpec></header><metadata><datacite:resource xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:datacite="http://datacite.org/schema/kernel-4" xmlns="http://namespace.openaire.eu/schema/oaire/" xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/oai_dc/ https://www.openaire.eu/schema/repo-lit/4.0/openaire.xsd"><datacite:titles><title>TITLE</title></datacite:titles><datacite:identifier identifierType="URL">https://doi.org/ID</datacite:identifier><datacite:descriptions><description descriptionType="Abstract">DATADESCRIPTION</description></datacite:descriptions><datacite:dates><datacite:date dateType="Issued">2020-01-01</datacite:date><datacite:date dateType="Available">2020-01-01</datacite:date></datacite:dates><datacite:publicationYear>2021</datacite:publicationYear><datacite:creators><creator><creatorName>CREATOR</creatorName><affiliation/></creator></datacite:creators><datacite:publisher>PUBLISHER</datacite:publisher><datacite:version>1</datacite:version><datacite:rightsList><datacite:rights rightsURI="info:eu-repo/semantics/openAccess">OpenAccess</datacite:rights></datacite:rightsList></datacite:resource></metadata></record></ListRecords></OAI-PMH>`

const ListIdentifiers = 
`<OAI-PMH xmlns="http://www.openarchives.org/OAI/2.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/  http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd"><request verb="ListIdentifiers" metadataPrefix="oai_dc">http://localhost/openaire/oai</request><ListIdentifiers><record><header><identifier>ID</identifier></header></record></ListIdentifiers></OAI-PMH>`

const Identify = 
`<OAI-PMH xmlns="http://www.openarchives.org/OAI/2.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/  http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd"><request verb="Identify">http://localhost/openaire/oai</request><Identify><repositoryName>Scicat Provider</repositoryName><baseURL>http://localhost/openaire/oai</baseURL><protocolVersion>2.0</protocolVersion><adminEmail>email@email</adminEmail><earliestDatestamp>2017-01-00T03:24:00Z</earliestDatestamp><deletedRecord>no</deletedRecord><granularity>YYYY-MM-DDThh:mm:ssZ</granularity></Identify></OAI-PMH>`

const GetRecord = 
`<OAI-PMH xmlns="http://www.openarchives.org/OAI/2.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/  http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd"><request verb="GetRecord" metadataPrefix="oai_dc" identifier="ID">http://localhost/openaire/oai</request><record><header><identifier identifierType="doi">ID</identifier><setSpec>openaire_data</setSpec></header><metadata><datacite:resource xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:datacite="http://datacite.org/schema/kernel-4" xmlns="http://namespace.openaire.eu/schema/oaire/" xsi:schemaLocation="http://www.openarchives.org/OAI/2.0/oai_dc/ https://www.openaire.eu/schema/repo-lit/4.0/openaire.xsd"><datacite:titles><title>TITLE</title></datacite:titles><datacite:identifier identifierType="URL">https://doi.org/ID</datacite:identifier><datacite:descriptions><description descriptionType="Abstract">DATADESCRIPTION</description></datacite:descriptions><datacite:dates><datacite:date dateType="Issued">2020-01-01</datacite:date><datacite:date dateType="Available">2020-01-01</datacite:date></datacite:dates><datacite:publicationYear>2021</datacite:publicationYear><datacite:creators><creator><creatorName>CREATOR</creatorName><affiliation/></creator></datacite:creators><datacite:publisher>PUBLISHER</datacite:publisher><datacite:version>1</datacite:version><datacite:rightsList><datacite:rights rightsURI="info:eu-repo/semantics/openAccess">OpenAccess</datacite:rights></datacite:rightsList></datacite:resource></metadata></record></OAI-PMH>`

export const openaire = {
    ListRecords: ListRecords,
    ListIdentifiers: ListIdentifiers,
    Identify: Identify,
    GetRecord: GetRecord,
}