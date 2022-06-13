using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using System;

namespace WebApp.UITests.DriverFixtures
{
    /// <summary>
    /// Creates a Chromium web driver
    /// </summary>
    public sealed class ChromeDriverFixture : IDisposable
    {
        public IWebDriver Driver { get; private set; }

        public ChromeDriverFixture()
        {
            Driver = new ChromeDriver();
        }

        public void Dispose()
        {
            Driver.Dispose();
        }
    }

    /// <summary>
    /// Creates a firefox web driver
    /// </summary>
    public sealed class FireFoxDriverFixture : IDisposable
    {
        public IWebDriver Driver { get; private set; }

        public FireFoxDriverFixture()
        {
            Driver = new FirefoxDriver();
        }

        public void Dispose()
        {
            Driver.Dispose();
        }
    }
}
