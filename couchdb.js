public Document SaveDocument(Document document)
{
    if (document.Rev == null)
        return CreateDocument(document);

    var resp = GetRequest(databaseBaseUri + "/" + document.Id + "?rev=" + document.Rev).Put().Form().Data(document).GetResponse();
    var jobj = resp.GetJObject();
    //TODO: Change this so it simply alters the revision on the document past in so that there isn't an additional request.
    return GetDocument(document.Id);
}
