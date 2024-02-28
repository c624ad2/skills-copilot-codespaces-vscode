function skillsMember() {
  return {
    name: 'John',
    age: 30,
    skills: ['JavaScript', 'React', 'Node', 'Python'],
    showSkills: function() {
      this.skills.forEach(skill => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
}