function skillsMember() {
    this.skills = [];
    this.addSkill = function(skill) {
        this.skills.push(skill);
    };
    this.getSkills = function() {
        return this.skills;
    };
}