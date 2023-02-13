import './App.css';
// import "./output.css";
// import './tailwind.css';

function App() {
  return (
    <div className="App">
      <div class="container mx-auto px-8 py-8 bg-cyan-400">
        <header class="flex justify-between items-center">
          <h1 class="text-2xl font-bold">My Website</h1>
          <nav class="flex">
            <a
              class="px-4 py-2 text-gray-800 hover:text-gray-600"
              href="https://google.com"
            >
              Home
            </a>
            <a
              class="px-4 py-2 text-gray-800 hover:text-gray-600"
              href="https://google.com"
            >
              About
            </a>
            <a
              class="px-4 py-2 text-gray-800 hover:text-gray-600"
              href="#https://google.com"
            >
              Contact
            </a>
          </nav>
        </header>
        <main class="flex flex-wrap">
          <div class="w-full md:w-1/3 px-4 py-8">
            <h2 class="text-xl font-bold">About Us</h2>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              auctor, augue a ullamcorper bibendum, magna est commodo magna, id
              blandit tellus ligula ac nisl.
            </p>
          </div>
          <div class="w-full md:w-1/3 px-4 py-8">
            <h2 class="text-xl font-bold">Our Services</h2>
            <ul class="list-disc pl-5 text-gray-700">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </div>
          <div class="w-full md:w-1/3 px-4 py-8">
            <h2 class="text-xl font-bold">Contact Us</h2>
            <form class="bg-white p-8">
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                  Name:
                </label>
                <input
                  class="border border-gray-400 p-2 w-full"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                  Email:
                </label>
                <input
                  class="border border-gray-400 p-2 w-full"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="message">
                  Message:
                </label>
                <textarea
                  class="border border-gray-400 p-2 w-full"
                  id="message"
                  name="message"
                ></textarea>
              </div>
              <button
                class="bg-gray-800 text-white p-2 hover:bg-gray-700"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </main>
        <footer class="bg-gray-300 p-4 text-center text-gray-700">
          Copyright &copy; 2022 My Website
        </footer>
      </div>
    </div>
  );
}

export default App;
