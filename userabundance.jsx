export default function Widget() {
    return (
        <div className="flex">
          <div className="w-1/6 bg-card h-screen p-4 shadow-lg">
            <div className="flex items-center mb-4">
              <img undefinedhidden="true" alt="Company Logo" src="https://placehold.co/50x50" className="w-8 h-8 rounded-full mr-2" />
              <h1 className="text-2xl font-semibold text-foreground">FishVault</h1>
            </div>
            <ul className="space-y-2">
              <li className="py-2 px-4 rounded-lg hover:bg-card transition duration-200">
                <a href="#" className="block text-foreground font-semibold">Abundance</a>
              </li>
              <li className="py-2 px-4 rounded-lg hover:bg-card bg-primary transition duration-200">
                <a href="#" className="block text-primary-foreground font-semibold">Occurrence</a>
              </li>
              <li className="py-2 px-4 rounded-lg hover:bg-card transition duration-200">
                <a href="#" className="block text-foreground font-semibold">Account</a>
              </li>
              <li className="py-2 px-4 rounded-lg hover:bg-card transition duration-200">
                <a href="#" className="block text-foreground font-semibold">Settings</a>
              </li>
            </ul>
          </div>
          <div className="w-5/6 p-4">
            <div className="flex justify-end space-x-4 items-center">
              <p className="text-muted-foreground">User: John Doe</p>
              <p className="text-muted-foreground">Account Type: Premium</p>
              <img undefinedhidden="true" alt="Profile Icon" src="https://placehold.co/40x40" className="w-8 h-8 rounded-full" />
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 p-4 bg-card rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-foreground">OCCURRENCE</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-muted-foreground">Location:</label>
                    <input type="text" className="mt-1 p-2 border border-border rounded w-full focus:outline-none focus:ring focus:ring-ring" placeholder="Classic" />
                  </div>
                  <div>
                    <label className="block text-muted-foreground">Species:</label>
                    <input type="text" className="mt-1 p-2 border border-border rounded w-full focus:outline-none focus:ring focus:ring-ring" placeholder="" />
                  </div>
                  <div>
                    <label className="block text-muted-foreground">Date:</label>
                    <input type="date" className="mt-1 p-2 border border-border rounded w-full focus:outline-none focus:ring focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block text-muted-foreground">Season:</label>
                    <select className="mt-1 p-2 border border-border rounded w-full focus:outline-none focus:ring focus:ring-ring">
                      <option value="">Select Season</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-muted-foreground">Depth:</label>
                    <input type="text" className="mt-1 p-2 border border-border rounded w-full focus:outline-none focus:ring focus:ring-ring" placeholder="" />
                  </div>
                  <div>
                    <label className="block text-muted-foreground">Weight:</label>
                    <input type="text" className="mt-1 p-2 border border-border rounded w-full focus:outline-none focus:ring focus:ring-ring" placeholder="" />
                  </div>
                  <button className="bg-primary text-primary-foreground p-2 rounded-lg w-full hover:bg-primary/80 transition duration-200">Search</button>
                </form>
              </div>
              <div className="w-full md:w-2/3 p-4 bg-card rounded-lg shadow-md mt-4 md:mt-0">
                <h2 className="text-lg font-semibold text-foreground">MAP</h2>
                <div className="h-56 bg-zinc-200 rounded-lg mb-4">
                  <img undefinedhidden="true" alt="Map placeholder" src="https://placehold.co/600x450" />
                </div>
                <div className="flex space-x-4 mt-32">
                  <button className="bg-secondary text-secondary-foreground p-2 rounded-lg hover:bg-secondary/80 transition duration-200">Download CSV</button>
                  <button className="bg-accent text-accent-foreground p-2 rounded-lg hover:bg-accent/80 transition duration-200">Download Excel</button>
                </div>
              </div>
            </div>
            <button id="analyticsBtn" className="bg-accent text-accent-foreground p-2 rounded-lg mt-4 hover:bg-accent/80 transition duration-200">Advanced Analytics</button>
            <div id="analyticsSection" className="hidden p-4 bg-card rounded-lg shadow-md mt-4">
              <h2 className="text-lg font-semibold text-foreground">Advanced Analytics</h2>
              <div id="graphsContainer" className="h-96 bg-zinc-200 rounded-lg mt-4"></div>
              <div id="chartsContainer" className="h-96 bg-zinc-200 rounded-lg mt-4"></div>
            </div>
          </div>
        </div>
        
        <script>
          const analyticsBtn = document.getElementById('analyticsBtn');
          const analyticsSection = document.getElementById('analyticsSection');
          analyticsBtn.addEventListener('click', () => {
            analyticsSection.classList.toggle('hidden');
            analyticsSection.scrollIntoView({ behavior: 'smooth' });
          });
        </script>
    )
}
