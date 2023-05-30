const form = document.querySelector('.form_container');
const successContainer = document.querySelector('.success_container');

const validateEmail = (event) => {
  event.preventDefault();
  
  const emailInput = document.querySelector('.form_input');
  const invalidEmailLabel = document.querySelector('.invalid_email_label');
  const userSubscriptionEmail = document.querySelector('.user_subscription_email');
  
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(email)) {
    emailInput.style.backgroundColor = 'white';
    emailInput.style.color = 'hsl(234, 29%, 20%)';
    invalidEmailLabel.style.display = 'none';
    form.style.display = 'none';
    successContainer.style.display = 'block';
    userSubscriptionEmail.textContent = email;
  } else {
    emailInput.style.backgroundColor = 'hsl(4, 100%, 90%)';
    emailInput.style.color = 'hsl(4, 100%, 67%)';
    invalidEmailLabel.style.display = 'block';
  }
}

form.addEventListener('submit', validateEmail);

const updateImage = () => {
  const image=document.querySelector('.image-img')
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

screenWidth < 767 ? 
image.src = 'assets/images/illustration-sign-up-mobile.svg'
: image.src = 'assets/images/illustration-sign-up-desktop.svg';
}

window.addEventListener('resize', updateImage)
