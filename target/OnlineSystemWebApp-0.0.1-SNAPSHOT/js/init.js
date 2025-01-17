$(document).ready(function() {

    /* DIRECTORY */
    initEasyTree(); // initialize easy tree
    refreshDirectory(); // refresh directory with what user has access to

    setRootAsDefaultFolder();
    /* CURRENT FILES/FOLDERS */
    updateCurrentFile();
    //updateCurrentFolder();

    /* EDITOR */
    // YL 12-10-2015 scrollable editor bug: set initially
    resizeAce();
    // End of YL
    //setEditorToCurrentFile();

    /* LOGIN */
    //updateLogin(); // on refresh, make sure log-in name is at the top

    /* NAVBAR */
    //updateNavbar(); // moved to inside updateLogin function because
        // of callbacks
                  
    /* Setting Configuration */
    updateSetting();
    
    if($('.easy-tree .easy-tree-toolbar .edit').length > 0){
        $('.easy-tree .easy-tree-toolbar .edit').hide();
    }
});
