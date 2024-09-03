# FileBatchRenamer

A simple command-line tool for batch renaming files in a directory. This script allows you to rename files with a specified extension to a new name, with an incremental suffix to avoid overwriting existing files.

## Features

- Rename files in a specified directory.
- Specify file extensions to target.
- Provide a new base name for the files.
- Incremental numbering to ensure unique filenames.
- Command-line interface with colored prompts using `picocolors`.

## Prerequisites

- Node.js (v14 or later recommended)
- npm (Node Package Manager)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Artemisx3/FileBatchRenamer.git
   cd FileBatchRenamer
   ```

2. **Install Dependencies**

   Ensure you have dependencies installed:

   ```bash
   npm install
   ```

## Usage

1. **Run the Script**

   Execute the script using Node.js:

   ```bash
   npm start
   ```

2. **Follow the Prompts**

   - Enter the directory path where the files are located.
   - Specify the file extension of the files you want to rename (e.g., `jpg`, `mp4`, `.doc`, etc.).
   - Provide a new base name for the files.

   The script will rename all files with the specified extension in the given directory, appending an incremental number to each file name.

3. **Options**

   - **Option 1**: Rename files in a certain directory.
   - **Option 2**: Exit the program.

## Example

Here’s an example of how the script works:

```
1. Rename files in certain directory to
2. Exit
Enter your choice: 1
Enter the directory: C:\Users\YOURUSERNAME\Pictures\MyImages
Enter the extension name of the files you'd like to change (e.g. jpg, png, etc.): png
Enter the new name for the files: vacation
```

If the directory contains files like `photo1.png`, `photo2.png`, etc., the script will rename them to `vacation-0.png`, `vacation-1.png`, etc.

## Code Overview

- **`menu()`**: Displays the main menu options.
- **`handleChoiceMenu()`**: Handles user input and menu choices.
- **`renameFiles(directory: string)`**: Performs the renaming operation based on user input.
- **`main()`**: Starts the application, displaying the menu and handling user choices.

## Disclaimer

**Use at your own risk.** This tool is provided as-is without any warranties. The author is not responsible for any data loss or damage that may occur while using this tool. Always ensure you have backups of your data before running batch operations.

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
