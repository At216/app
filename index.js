if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW registered");
        console.log(registration);
    }).catch(error => {
        console.log('SW registration failed')
        console.log(error);
    });
}



<h1>Browser Notes!</h1>
<h3>Write notes here, and save them until you close this tab!</h3><br>
<h5>Use caution when first using this site, it has some quirks :) 
    <br>-->Press 'Save Notes!' to save your notes
    <br>-->Press 'Load Notes!' to load any previously saved notes
    <br>-->Press 'Delete Notes!' to delete any previously saved notes
    <br>This website uses Javascript cookies to remember your notes :)
    <br>Notes may clear when you exit this tab or when you close your browser, it may depend on which browser you use. 
    <br>It's pretty typical that they only clear when you exit your browser. 
    <br>Keep your browser open (in the same profile that this website was loaded in, if applicable) 
    <br>to keep any saved notes around. 
    <br>Enjoy my site, I hope it helps you like it helps me!
</h5><br><br><br>

<div class="textarea-div">
<textarea class="textarea" id="textarea"></textarea><br>
<button onclick="save()">Save notes!</button>
<button onclick="load()">Load notes!</button>
<button onclick="deleter()">Delete notes!</button> <!--'delete' is a JS reserved work-->
</div>

<style>
.textarea-div {
    margin:auto;
    width:80%;
}
.textarea {
    width:100%;
    height:200px;
    resize: vertical;
}
</style>

<script>
alert('This website uses Javascript cookies to remember your notes :)\nNotes may clear when you exit this tab or when you close your browser, it may depend on which browser you use. ')
function save() {
    console.log('setting cookie!')
    notes = document.getElementById('textarea').value
    notes = encodeURI(notes)
    notes = notes.replaceAll(';', '<forbidden>semicolon<forbidden>')
    notes = notes.replaceAll(',', '<forbidden>comma<forbidden>')
    notes = notes.replaceAll(' ', '<forbidden>space<forbidden>')
    document.cookie = "pad=" + String(notes) + ";path=/;";
}
function load() {
    console.log('Loading cookie')
    notes = document.cookie;
    notes = notes.replace('pad=','')
    notes = decodeURI(notes)
    notes = notes.replaceAll('<forbidden>semicolon<forbidden>', ';')
    notes = notes.replaceAll('<forbidden>comma<forbidden>', ',')
    notes = notes.replaceAll('<forbidden>space<forbidden>', ' ')
    document.getElementById('textarea').value = notes;
}
function deleter() {
    console.log('deleting cookie')
    document.cookie = "pad=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
</script>
