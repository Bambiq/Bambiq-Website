	const descriptionVisibility = {};
	let currentVisibleList = null;

	function toggleList(listNumber) {
	  const allLists = document.querySelectorAll('.list');

	  // Hide all descriptions in all lists
	  document.querySelectorAll('.description-section').forEach(description => {
		description.style.display = 'none';
		const id = description.id;
		if (id) descriptionVisibility[id] = false;
	  });

	  allLists.forEach((list, index) => {
		const currentListNumber = index + 1;
		const isSelected = (currentListNumber === listNumber);

		if (isSelected) {
		  const isAlreadyVisible = list.style.display === 'block';

		  // Toggle visibility
		  list.style.display = isAlreadyVisible ? 'none' : 'block';
		  currentVisibleList = isAlreadyVisible ? null : listNumber;
		} else {
		  list.style.display = 'none';
		}
	  });
	}

	function toggleDescription(id) {
	  const description = document.getElementById(id);

	  if (!description) return;

	  const show = !descriptionVisibility[id];

	  // Hide all descriptions in the current visible list
	  if (currentVisibleList !== null) {
		const currentList = document.querySelectorAll('.list')[currentVisibleList - 1];
		currentList.querySelectorAll('.description-section').forEach(desc => {
		  desc.style.display = 'none';
		  const descId = desc.id;
		  if (descId) descriptionVisibility[descId] = false;
		});
	  }

	  // Show only one clicked
	  description.style.display = show ? 'block' : 'none';
	  descriptionVisibility[id] = show;
	}