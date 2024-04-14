let isSignedIn = false;
let mobileContainer = document.getElementById('outer_mobile_signin_signup_container');
let mobileSignin = document.getElementById('mobile_signin_container');
let mobileSignup = document.getElementById('mobile_signup_container');
let windowsContainer = document.getElementById('outer_windows_signin_signup_container');
let windowsSignin = document.getElementById('windows_signin_container');
let windowsSignup = document.getElementById('windows_signup_container');
let pageBody = document.getElementsByTagName('body')[0];
function scrollToTop() {
    window.scrollTo(0, 0);
}
function openSignUp(){
    if(!isSignedIn){
        scrollToTop();
        if(window.innerWidth < 768){
            windowsContainer.style.display = 'none';
            mobileContainer.style.display = 'flex';
        }
        else{
            mobileContainer.style.display = 'none';
            windowsContainer.style.display = 'flex';
        }
        pageBody.style.overflowY = 'hidden';
    }
}
function closeSignUp(){
    if(window.innerWidth < 768){
        mobileContainer.style.display = 'none';
    }
    else{
        windowsContainer.style.display = 'none';
    }
    pageBody.style.overflowY = 'auto';
}
function stopClose(event){
    event.stopPropagation();
}
function switchSigninSignup(){
    if(window.innerWidth < 768){
        if(mobileSignup.style.display === 'flex'){
            mobileSignup.style.display = 'none';
            mobileSignin.style.display = 'flex';
        }
        else{
            mobileSignin.style.display = 'none';
            mobileSignup.style.display = 'flex';
        }
    }
    else{
        if(windowsSignup.style.display === 'flex'){
            windowsSignup.style.display = 'none';
            windowsSignin.style.display = 'flex';
        }
        else{
            windowsSignin.style.display = 'none';
            windowsSignup.style.display = 'flex';
        }
    }
}
function signIn(){
    document.getElementById('signin').style.display = 'none';
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('recommended_groups').style.display = 'flex';
    isSignedIn=true;
    closeSignUp();
}
function joinGroupMobile(mobileButton){
    openSignUp();
    if(isSignedIn){
        if(mobileButton.innerHTML==='Join Group'){
            mobileButton.innerHTML='Leave Group'
        }
        else{
            mobileButton.innerHTML='Join Group'
        }
    }
}
function joinGroupWindows(windowsButton){
    openSignUp();
    if(isSignedIn){
        if(windowsButton.style.color === 'white'){
            windowsButton.style.color = 'black';
            windowsButton.innerHTML = '<img src="./images/leave_group.png" alt="<-"> <span>Leave Group</span>';
            windowsButton.style.backgroundColor = 'white';
            windowsButton.style.border = '0.8px solid rgb(152, 152, 153)'
        }
        else{
            windowsButton.style.color = 'white';
            windowsButton.innerHTML = '<img src="./images/join_group.png" alt="+"> <span>Join Group</span>';
            windowsButton.style.backgroundColor= 'rgb(47, 108, 229)';
        }
    }
}
function followGroup(followButton) {
    if (followButton.style.color === 'black') {
        followButton.style.color = 'rgb(237, 238, 240)';
        followButton.style.backgroundColor = 'black';
        followButton.innerHTML="Followed";
    } else {
        followButton.style.color = 'black';
        followButton.style.backgroundColor = 'rgb(237, 238, 240)';
        followButton.innerHTML="Follow";
    }
}
function toggleMenu(child){
    openSignUp();
    if(isSignedIn){
        let parent = child.parentNode;
        let menu = parent.childNodes[2];
        if(menu.style.display === 'flex'){
            menu.style.display = 'none';
        }
        else{
            menu.style.display = 'flex';
        }
    }
}

window.onresize = function(event) {
    if(!isSignedIn){
        if(windowsContainer.style.display === 'flex' || mobileContainer.style.display === 'flex'){
            openSignUp();
        }
    }
}