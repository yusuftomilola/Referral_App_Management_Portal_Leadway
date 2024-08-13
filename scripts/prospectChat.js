function selectTab(tab) {
    const activityBtn = document.getElementById('activityBtn');
    const chatBtn = document.getElementById('chatBtn');
    const activityContent = document.getElementById('activityContent');
    const chatContent = document.getElementById('chatContent');

  // handle tab toggle

    if (tab === 'activity') {
      activityBtn.classList.add('bg-[#ffffff]', 'text-[#002855]');
      activityBtn.classList.remove('bg-[#002855]', 'text-[#ffffff]');
      chatBtn.classList.add('bg-[#002855]', 'text-[#ffffff]');
      chatBtn.classList.remove('bg-[#ffffff]', 'text-[#002855]');
      activityContent.classList.remove('hidden');
      chatContent.classList.add('hidden');
    } else if (tab === 'chat') {
      activityBtn.classList.add('bg-[#002855]', 'text-[#ffffff]');
      activityBtn.classList.remove('bg-[#ffffff]', 'text-[#002855]');
      chatBtn.classList.add('bg-[#ffffff]', 'text-[#002855]');
      chatBtn.classList.remove('bg-[#002855]', 'text-[#ffffff]');
      activityContent.classList.add('hidden');
      chatContent.classList.remove('hidden');
    }
  }

  // Set default tab
  window.onload = function() {
    selectTab('activity');
  }

  function toggleCollapse() {
    const chatBtn = document.getElementById('chatBtn');
    const collapseBtn = document.getElementById('collapseBtn')
    const collapsibleContent = document.getElementById('collapsible-content');
    const profilePic = document.getElementById('profile-pic');
    const name = document.querySelector('.name');

    if (chatBtn.classList.contains('bg-[#ffffff]')) {
      collapsibleContent.classList.toggle('hidden');
      profilePic.classList.toggle('hidden');
      name.classList.toggle('ml-8');
      collapseBtn.classList.toggle('mr-2');
    }
  }