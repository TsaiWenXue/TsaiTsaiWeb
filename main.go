package main

import (
	"os"
	
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Static("/static", "./static")

	r.LoadHTMLGlob("views/*")

	r.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	r.GET("/contact", func(c *gin.Context) {
		c.HTML(200, "contact.html", nil)
	})

	r.Run(":"+os.Getenv("PORT"))
}
