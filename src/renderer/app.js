const pages = [
  'Dashboard', 'Projects', 'Universes', 'Countries', 'Factions', 'Characters',
  'Timeline', 'Canon', 'Writer', 'Search', 'Settings', 'Plugins', 'About'
];

const navigation = document.querySelector('#navigation');
const title = document.querySelector('#page-title');
const description = document.querySelector('#page-description');

function selectPage(page, button) {
  title.textContent = page;
  description.textContent = `${page} will be implemented in a future ticket.`;
  document.querySelectorAll('.navigation-button').forEach((item) => item.classList.remove('is-active'));
  button.classList.add('is-active');
}

pages.forEach((page, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'navigation-button';
  button.textContent = page;
  button.addEventListener('click', () => selectPage(page, button));
  navigation.append(button);
  if (index === 0) selectPage(page, button);
});
