function anvilgui(){
    if(confirm("Are you sure that you want to open the AnvilGUI download page [CodeMC.IO]?") == true){
        window.open("https://repo.codemc.io/repository/maven-snapshots/net/wesjd/anvilgui/1.5.3-SNAPSHOT/anvilgui-1.5.3-20220302.153253-5.jar");
    }else{
        return;
    }
}
function netty(){
    if(confirm("Are you sure that you want to open the Netty download page [MavenRepo]?") == true){
        window.open("https://repo1.maven.org/maven2/io/netty/netty-all/4.1.9.Final/netty-all-4.1.9.Final.jar");
    }else{
        return;
    }
}
function sysomand(){
    if(confirm("Are you sure that you want to open the SysomanderAPI download page [SpigotMC.ORG]?") == true){
        window.open("https://www.spigotmc.org/resources/sysomand-api.99863/");
    }else{
        return;
    }
}

function spg(){
    var spigot = "https://hub.spigotmc.org/nexus/service/local/artifact/maven/redirect?r=snapshots&g=org.spigotmc&a=spigot-api&v=VERHERE-R0.1-SNAPSHOT&e=jar&c=shaded";

    var spigot_version = prompt("What version of Spigot do you want to download? (Example: 1.18.2) (Can go from 1.8.3 to Latest)", "1.18.2");

    if(spigot_version == null){
        alert("Not Valid Version (null)");
        return spg();
    }

    spigot = spigot.replace("VERHERE", spigot_version);

    window.open(spigot);
}
async function nms(){
    alert("Please follow the steps on this page CAREFULLY to compile correctly.");
    if(confirm("Once OK is clicked, I will download BuildTools.jar.\nPlease put this file in a new folder, and make sure the file is called BuildTools.jar")){
        await window.open("https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/artifact/target/BuildTools.jar");
    }
    alert("Click OK once buildtools is in a new folder.");

    var compile = "java -jar BuildTools.jar --rev VERHERE --compile craftbukkit";
    var compile_version = prompt("What version of minecraft do you want to use? (Example: 1.18.2) (Can go from 1.8.3 to Latest)", "1.18.2");

    if(compile_version == null){
        alert("Not Valid Version (null)");
        return nms();
    }
    compile = compile.replace("VERHERE", compile_version);

    prompt("Now, open command prompt and go into the folder that you made.\nThen, type the following command:", compile);
    alert("This will take a while. Once it is done, click OK.");
    alert('Go to the "CraftBukkit" folder that has been generated,\nthen the "target" folder, and find the\n"original-craftbukkit-'+compile_version+'-blah-blah.jar"\nThat is NMS! Make sure it starts with "original" for remapped (uses names like gameProfile and goalSelector)\nand use other ones (except bootstrap) for non-remapped (uses names like bA and bC)');
}
function dfu(){
    if(confirm("Are you sure that you want to download DataFixerUpper? [compiled by me]") == true){
        window.location.href="datafixerupper-4.1.0-SNAPSHOT.jar";
    }else{
        return;
    }
}
function ath(){
    if(confirm("Are you sure that you want to download AuthLib? [minecraft.net]") == true){
        window.open("https://libraries.minecraft.net/com/mojang/authlib/1.5.21/authlib-1.5.21.jar");
    }else{
        return;
    }
}
