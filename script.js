document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function() {
                const topic = this.previousElementSibling.textContent;
                const chapter = this.closest('.chapter').querySelector('h2').textContent;
                const progressBar = this.closest('.chapter').querySelector('.progress');
                const topicsInChapter = this.closest('.chapter').querySelectorAll('.topic').length;
                const completedTopics = this.closest('.chapter').querySelectorAll('.btn.completed').length + 1;
                const progressPercentage = (completedTopics / topicsInChapter) * 100;
                
                progressBar.style.width = `${progressPercentage}%`;
                this.classList.add('completed');
                this.textContent = 'Completed';
                this.disabled = true;

                alert(`Starting study session for:\n${chapter}\n${topic}`);
            });
        });
