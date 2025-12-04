export default function Home() {
  return (
    <>
      <div className="banner theme-bg-light">
        The Paper Handling App, also known as the REACT App is now named Paper.
      </div>
      <section>
        <h1>Internal App Style Guide</h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using, making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </p>
      </section>
      <section>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Text</p>
      </section>

      <section>
        <h3>Table</h3>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>123 Main St</td>
              <td>123-4567</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>456 Elm St</td>
              <td>987-6543</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Form inputs</h3>

        <label htmlFor="text">Text:</label>
        <input type="text" id="text" placeholder="Enter text" />

        {/* <fieldset>
          <legend>Radio:</legend>
          <label htmlFor="radio1">
            <input type="radio" id="radio1" name="radio-group" />
            Radio 1
          </label>
          <br />
          <label htmlFor="radio2" className="mr-0 pr-0">
            <input
              type="radio"
              id="radio2"
              name="radio-group"
              className="h-8"
            />
            Radio 2
          </label>
        </fieldset>

        <div>
          <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            Checkbox
          </label>
        </div>

        <div>
          <label htmlFor="file-input">File</label>
          <input type="file" id="file-input" />
        </div> */}

        <div>
          <label htmlFor="textarea">Textarea:</label>
          <textarea id="textarea" placeholder="Enter your message"></textarea>
        </div>
      </section>

      <section>
        <h3>Buttons</h3>
        <input type="button" value="Continue" className="primary" />
        <input type="button" value="Cancel" />
      </section>
    </>
  );
}
