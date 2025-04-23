// Store visibility of description sections
const descriptionVisibility = {};
let currentVisibleList = null;

// Toggle list and reset description sections
function toggleList(listNumber) {
  const allLists = document.querySelectorAll('.list');

  allLists.forEach((list, index) => {
    const currentListNumber = index + 1;
    const isSelected = (currentListNumber === listNumber);

    if (isSelected && currentVisibleList === listNumber) {
      // If the same button is clicked again, hide the list
      list.style.display = 'none';
      list.querySelectorAll('.description-section').forEach(description => {
        description.style.display = 'none';
        const id = description.id;
        if (id) descriptionVisibility[id] = false;
      });
      currentVisibleList = null;
    } else if (isSelected) {
      // Show selected list
      list.style.display = 'block';
      currentVisibleList = listNumber;
    } else {
      // Hide all other lists and their descriptions
      list.style.display = 'none';
      list.querySelectorAll('.description-section').forEach(description => {
        description.style.display = 'none';
        const id = description.id;
        if (id) descriptionVisibility[id] = false;
      });
    }
  });
}

// Toggle description inside list
function toggleDescription(id) {
  const description = document.getElementById(id);
  const show = !descriptionVisibility[id];

  description.style.display = show ? 'block' : 'none';
  descriptionVisibility[id] = show;
}
