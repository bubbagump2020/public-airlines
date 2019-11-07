cd frontend
npm run-script build
cd ..
echo "Copying to backend..."
rm -rf ./backend/public/*
mv -v ./frontend/build/* ./backend/public