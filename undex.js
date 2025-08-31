// בחירת הכפתור והאימוג'י
const likeButton = document.getElementById('likeButton');
const likeEmoji = document.getElementById('likeEmoji');

// פונקציה לטיפול בלחיצה
likeButton.addEventListener('click', function() {
    // הצגת האימוג'י
    likeEmoji.classList.remove('hidden');
    
    // אחרי 1.5 שניות מחביאים שוב את האימוג'י
    setTimeout(function() {
        likeEmoji.classList.add('hidden');
    }, 1500);
});
