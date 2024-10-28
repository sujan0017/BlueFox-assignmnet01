
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto text-center">
        <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
        </div>
    </div>
</footer>
  )
}

export default Footer
