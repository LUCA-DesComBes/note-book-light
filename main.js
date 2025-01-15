const btnPlus = document.getElementById("divPlus");
const divBack = document.getElementById("divBack");
const mainScroll = document.querySelector("main");
btnPlus.addEventListener("click", () => {
    btnPlus.style.display = "none"
    mainScroll.style.display = "none"
	mainScroll.innerHTML = `
    <article class="artNav">
				<section class="sectNav">
					<div class="divBack" id="divBack">
						<img src="./img/arrow-left.svg" alt="arrow-left" />
						<p>Go Back</p>
					</div>
					<div class="divDel">
						<img src="./img/Delete.svg" alt="Delete" />
						<img src="./img/Archive-note.svg" alt="Archive-note" />
						<p class="cancel">Cancel</p>
						<p class="saveNote">Save Note</p>
					</div>
				</section>
				<hr />
				<h2>React Performance Optimization</h2>
				<section class="sectAttr">
					<div class="divAttr">
						<div class="attr">
							<img src="./img/Tag-note.svg" alt="Tag-note" />
							<p class="tagsAttr">Tags</p>
						</div>
						<p class="attrJob">Dev, React</p>
					</div>
					<div class="divAttribut">
						<div class="attr">
							<img src="./img/Circle-clock.svg" alt="Circle-clock" />
							<p class="tagsAttr">Last edited</p>
						</div>
						<p class="attrDate">29 Oct 2024</p>
					</div>
				</section>
				<hr />
				<section class="sectNote">
					<textarea name="" id="">
Key performance optimization techniques:

1. Code Splitting
- Use React.lazy() for route-based splitting
- Implement dynamic imports for heavy components

2.	Memoization
- useMemo for expensive calculations
- useCallback for function props
- React.memo for component optimization

3. Virtual List Implementation
- Use react-window for long lists
- Implement infinite scrolling

TODO: Benchmark current application and identify bottlenecks
                 </textarea
					>
				</section>
			</article>
    `;
});
