var members = [
    {memberId : 1, parentId:null, amount:200, otherInfo:"blah"},
    {memberId : 2, parentId:1, amount:300, otherInfo:"blah1"},
    {memberId : 3, parentId:1, amount:400, otherInfo:"blah2"},
    {memberId : 4, parentId:3, amount:500, otherInfo:"blah3"},
    {memberId : 6, parentId:1, amount:600, otherInfo:"blah4"},
    {memberId : 9, parentId:4, amount:700, otherInfo:"blah5"},
    {memberId : 12, parentId:2, amount:800, otherInfo:"blah6"},
    {memberId : 5, parentId:2, amount:900, otherInfo:"blah7"},
    {memberId : 13, parentId:2, amount:0, otherInfo:"blah8"},
    {memberId : 14, parentId:2, amount:800, otherInfo:"blah9"},
    {memberId : 55, parentId:2, amount:250, otherInfo:"blah10"},
    {memberId : 56, parentId:3, amount:10, otherInfo:"blah11"},
    {memberId : 57, parentId:3, amount:990, otherInfo:"blah12"},
    {memberId : 58, parentId:3, amount:400, otherInfo:"blah13"},
    {memberId : 59, parentId:6, amount:123, otherInfo:"blah14"},
    {memberId : 54, parentId:6, amount:321, otherInfo:"blah15"},
    {memberId : 53, parentId:56, amount:10000, otherInfo:"blah7"},
    {memberId : 52, parentId:2, amount:47, otherInfo:"blah17"},
    {memberId : 51, parentId:6, amount:534, otherInfo:"blah18"},
    {memberId : 50, parentId:9, amount:55943, otherInfo:"blah19"},
    {memberId : 22, parentId:9, amount:2, otherInfo:"blah27"},
    {memberId : 33, parentId:12, amount:-10, otherInfo:"blah677"}
    
];
var testImgSrc = "http://0.gravatar.com/avatar/06005cd2700c136d09e71838645d36ff?s=69&d=wavatar";
(function heya( parentId ){
    // This is slow and iterates over each object everytime.
    // Removing each item from the array before re-iterating 
    // may be faster for large datasets.
    for(var i = 0; i < members.length; i++){
        var member = members[i];
        if(member.parentId === parentId){
            var parent = parentId ? $("#containerFor" + parentId) : $("#mainContainer"),
                memberId = member.memberId,
                    metaInfo = "<img src='"+testImgSrc+"'/>" + member.otherInfo + " ($" + member.amount + ")";
            parent.append("<div class='container' id='containerFor" + memberId + "'><div class='member'>" + memberId + "<div class='metaInfo'>" + metaInfo + "</div></div></div>");
            heya(memberId);
        } 
    }
 }( null ));

// makes it pretty:
// recursivley resizes all children to fit within the parent.
var pretty = function(){
    var self = $(this),
        children = self.children(".container"),
        // subtract 4% for margin/padding/borders.
        width = (100/children.length) - 2;
    children
        .css("width", width + "%")
        .each(pretty);
    
};
$("#mainContainer").each(pretty);
    