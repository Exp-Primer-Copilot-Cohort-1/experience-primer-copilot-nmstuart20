function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsButton = document.getElementById("member-skills-button");
    var memberSkillsButtonClose = document.getElementById("member-skills-button-close");
    var memberSkillsButtonOpen = document.getElementById("member-skills-button-open");
    var memberSkillsButtonCloseIcon = document.getElementById("member-skills-button-close-icon");
    var memberSkillsButtonOpenIcon = document.getElementById("member-skills-button-open-icon");

    memberSkillsButton.addEventListener("click", function() {
        memberSkills.classList.toggle("member-skills-active");
        memberSkillsButtonClose.classList.toggle("member-skills-button-close-active");
        memberSkillsButtonOpen.classList.toggle("member-skills-button-open-active");
        memberSkillsButtonCloseIcon.classList.toggle("member-skills-button-close-icon-active");
        memberSkillsButtonOpenIcon.classList.toggle("member-skills-button-open-icon-active");
    });
}