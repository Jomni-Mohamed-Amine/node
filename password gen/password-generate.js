const generatePassword = require('generate-password');

function generate() {
  const password = generatePassword.generate({
  });
  console.log('Generated Password:', password);
}
generate();
