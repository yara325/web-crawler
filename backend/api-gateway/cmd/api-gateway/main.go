package main

import (
	"log"
	"net/http"

	"github.com/Netflix/go-env"
	"github.com/gin-gonic/gin"
)

func main() {
	// Start the server
	type Config struct {
		Address string `env:"ADDRESS,default=:8082"`
	}

	var config Config
	_, err := env.UnmarshalFromEnviron(&config)
	if err != nil {
		log.Fatalf("Failed to load environment variables: %v", err)
	}

	// Initialize Gin router
	router := gin.Default()

	// Note(Yara): Splitting the router into two groups to:
	// 1. Avoid having to prefix all endpoints with /api/v1.
	// 2. Make it easier to add middleware later (e.g. auth middleware) for a specific route group.
	rootGroup := router.Group("/")
	v1Group := rootGroup.Group("/api/v1")

	rootGroup.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "ok"})
	})

	v1Group.POST("/crawl", func(c *gin.Context) {
		// TODO(Yara): For now this is just a placeholder. Implement this endpoint in a separate commit.
		c.JSON(http.StatusAccepted, gin.H{"message": "Not implemented"})
	})

	v1Group.GET("/results", func(c *gin.Context) {
		// TODO(Yara): For now this is just a placeholder. Implement this endpoint in a separate commit.
		c.JSON(http.StatusOK, gin.H{"results": []string{}})
	})

	if err := router.Run(config.Address); err != nil {
		log.Fatalf("Failed to start API Gateway: %v", err)
	}
}